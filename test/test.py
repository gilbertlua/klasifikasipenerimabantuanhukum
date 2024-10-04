import joblib
import pandas as pd 

clf = joblib.load('model/model.pkl')
data = pd.DataFrame({
    'Penghasilan_Bulanan': [1],
    'Jumlah_Tanggungan': [2],
    'Status_Pekerjaan': [1],  
    'Pendidikan_Terakhir': [0],  
    'Status_Kepemilikan_Rumah': [1],  
    'Kondisi_Kesehatan': [0],  
    'Bantuan_Lain_yang_Diterima': [0]
})

prediction = clf.predict(data)
print(f"Prediction: {prediction}")