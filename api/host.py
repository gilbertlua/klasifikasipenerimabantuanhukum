from flask import Flask, request, jsonify,  send_from_directory
import joblib

app = Flask(__name__, static_folder='wwwroot')


model = joblib.load('model/model.pkl')

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def static_files(path):
    return send_from_directory(app.static_folder, path)


@app.route('/predict', methods=['POST'])
def predict():
    data = request.json['data']  
    prediction = model.predict([data])
    return jsonify({'prediction': int(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True)
