from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
import joblib
from scipy.signal import welch
from scipy.stats import skew, kurtosis
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This enables CORS for all routes

# Load the trained model
model = joblib.load("C:/Users/Surya Teja Gupta/OneDrive/Desktop/ds004504-derivatives/csv_output/eeg_classifier_model.pkl")
print("✅ Model loaded.")

# EEG Feature Extraction Parameters
EEG_SAMPLING_RATE = 256  # Hz
EEG_BANDS = {
    'delta': (0.5, 4),
    'theta': (4, 8),
    'alpha': (8, 13),
    'beta': (13, 30),
    'gamma': (30, 45),
}

def bandpower_welch(data, fs, band):
    fmin, fmax = band
    freqs, psd = welch(data, fs=fs, nperseg=fs*2)
    idx_band = np.logical_and(freqs >= fmin, freqs <= fmax)
    return np.trapz(psd[idx_band], freqs[idx_band])

def hjorth_params(signal):
    first_deriv = np.diff(signal)
    second_deriv = np.diff(first_deriv)
    var_zero = np.var(signal)
    var_d1 = np.var(first_deriv)
    var_d2 = np.var(second_deriv)
    activity = var_zero
    mobility = np.sqrt(var_d1 / var_zero) if var_zero != 0 else 0
    complexity = (np.sqrt(var_d2 / var_d1) / mobility) if var_d1 != 0 and mobility != 0 else 0
    return activity, mobility, complexity

def extract_features(df):
    features = []
    for ch in df.columns:
        signal = df[ch].values

        # Band powers
        for band_name, band_range in EEG_BANDS.items():
            features.append(bandpower_welch(signal, EEG_SAMPLING_RATE, band_range))

        # Hjorth
        activity, mobility, complexity = hjorth_params(signal)
        features.extend([activity, mobility, complexity])

        # Statistical features
        features.extend([
            np.mean(signal),
            np.std(signal),
            skew(signal),
            kurtosis(signal),
            np.median(signal),
            np.min(signal),
            np.max(signal)
        ])
    return np.array(features).reshape(1, -1)

@app.route('/')
def index():
    return "✅ EEG Classifier Backend is running."

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    try:
        df = pd.read_csv(file)
        features = extract_features(df)
        prediction = model.predict(features)[0]
        # Get prediction probabilities
        probabilities = model.predict_proba(features)[0]
        # Confidence is the maximum probability
        confidence = round(max(probabilities) * 100, 2)
        return jsonify({
            'prediction': prediction,
            'confidence': confidence
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)