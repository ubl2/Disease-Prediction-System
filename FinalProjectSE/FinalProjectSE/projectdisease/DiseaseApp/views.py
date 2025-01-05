#importing all the libraries required
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from DiseaseApp.models import Disease,Symptom,medical_history,Question,Feedback,patients,appionments,doctors
from DiseaseApp.serializers import DiseaseSerializer,SymptomSerializer,medical_historySerializer,QuestionSerializer,FeedbackSerializer,patientSerializer,doctorSerializer,appionmentSerializer
from django.utils.decorators import method_decorator
from django.shortcuts import render
from django.http import HttpResponse
import numpy as np
import pandas as pd
from scipy.stats import mode
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.svm import SVC
from sklearn.naive_bayes import GaussianNB
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LinearRegression
from sklearn.metrics import accuracy_score, confusion_matrix
from sklearn.linear_model import LogisticRegression
from sklearn.neighbors import KNeighborsClassifier
from sklearn import tree
from sklearn.linear_model import SGDClassifier
from collections import Counter
import joblib
import json
import statistics
from sklearn import metrics
from sklearn.ensemble import GradientBoostingRegressor


# The API to predict diseases and probability.
@method_decorator(csrf_exempt)
def predictdisease(request):
	temp={}

	if request.method=='POST':
		temp100=JSONParser().parse(request)
		# Get the symptoms from front end.
		temp['Symptom1']=temp100['Symptom1']
		temp['Symptom2']=temp100['Symptom2']
		temp['Symptom3']=temp100['Symptom3']
		
	
          #Train models on dataset.
		DATA_PATH = "C:/Users/Bhavya Lahari/Desktop/UNT/Software/ML/Training.csv"
		data = pd.read_csv(DATA_PATH).dropna(axis = 1)
		encoder = LabelEncoder()
		data["prognosis"] = encoder.fit_transform(data["prognosis"])
		X = data.iloc[:,:-1]
		y = data.iloc[:, -1]
		X_train, X_test, y_train, y_test =train_test_split(
  		X, y, test_size = 0.2, random_state = 24)
		final_svm_model=SVC()
		final_nb_model = GaussianNB()
		final_rf_model = RandomForestClassifier(random_state=18)
		final_lg_model= LogisticRegression()
		final_knn_model=KNeighborsClassifier(n_neighbors=5)
		final_tree_model=tree.DecisionTreeClassifier()
		final_sgd_model=SGDClassifier(loss="hinge", penalty="l2", max_iter=5)
		final_svm_model.fit(X, y)
		final_nb_model.fit(X, y)
		final_rf_model.fit(X, y)
		final_lg_model.fit(X,y)
		final_knn_model.fit(X,y)
		final_tree_model.fit(X,y)
		final_sgd_model.fit(X,y)

		test_data = pd.read_csv("C:/Users/Bhavya Lahari/Desktop/UNT/Software/ML/Testing.csv").dropna(axis=1)
		test_X = test_data.iloc[:, :-1]
		test_Y = encoder.fit_transform(test_data["prognosis"])

		svm_preds = final_svm_model.predict(test_X)
		nb_preds = final_nb_model.predict(test_X)
		rf_preds = final_rf_model.predict(test_X)
		lg_preds= final_lg_model.predict(test_X)
		knn_preds=final_knn_model.predict(test_X)
		tree_preds=final_tree_model.predict(test_X)
		sgd_preds=final_sgd_model.predict(test_X)

		final_preds = [mode([i,j,k,l,m,n,o])[0][0] for i,j,
               k,l,m,n,o in zip(svm_preds, nb_preds, rf_preds, lg_preds,knn_preds,tree_preds,sgd_preds)]


		symptoms = X.columns.values

		symptom_index = {}
		for index, value in enumerate(symptoms):
			symptom = " ".join([i.capitalize() for i in value.split("_")])
			symptom_index[symptom] = index
 
		data_dict = {
			"symptom_index":symptom_index,
			"predictions_classes":encoder.classes_
		}
          #Calculate the probability
		output_display=[]
		def predictDisease(symptom1,symptom2,symptom3):
			symptoms1=[]
			symptoms1.append(symptom1)
			symptoms1.append(symptom2)
			symptoms1.append(symptom3)
			# print(symptoms1)
			input_data = [0] * len(data_dict["symptom_index"])
			for symptom in symptoms1:
				index = data_dict["symptom_index"][symptom]
				input_data[index] = 1
         
			input_data = np.array(input_data).reshape(1,-1)
			rf_prediction = data_dict["predictions_classes"][final_rf_model.predict(input_data)[0]]
			nb_prediction = data_dict["predictions_classes"][final_nb_model.predict(input_data)[0]]
			svm_prediction = data_dict["predictions_classes"][final_svm_model.predict(input_data)[0]]
			lg_prediction = data_dict["predictions_classes"][final_lg_model.predict(input_data)[0]]
			knn_prediction= data_dict["predictions_classes"][final_knn_model.predict(input_data)[0]]
			tree_prediction= data_dict["predictions_classes"][final_tree_model.predict(input_data)[0]]
			sgd_prediction= data_dict["predictions_classes"][final_sgd_model.predict(input_data)[0]]
			final_output = [rf_prediction, nb_prediction, svm_prediction, lg_prediction, knn_prediction, tree_prediction, sgd_prediction] 
		
			for element in np.unique(final_output):
				temp1=final_output.count(element)
				output_display.append([element,round((temp1/7)*100,2)])
			final_prediction = mode([rf_prediction, nb_prediction, svm_prediction, lg_prediction, knn_prediction, tree_prediction, sgd_prediction])[0][0]
			predictions = {
					"final_prediction":final_prediction
			}
			return predictions
		predictDisease(temp['Symptom1'],temp['Symptom2'],temp['Symptom3'])

	return JsonResponse(output_display , safe=False)


#API to predict insurance.
@method_decorator(csrf_exempt)
def predictinsurance(request):
     temp={} 
     output=[]
     if request.method=='POST': 
     # print(request.POST.dict()) 
          temp100=JSONParser().parse(request)
          temp['age']=temp100['age'] 
          temp['sex']=temp100['sex'] 
          temp['bmi']=temp100['bmi'] 
          temp['children']=temp100['children'] 
          temp['smoker']=temp100['smoker'] 
          temp['region']=temp100['region']
          
          
          i_d = pd.read_csv('C:/Users/Bhavya Lahari/Desktop/UNT/Software/ML/insurance.csv')
          average = statistics.mean(i_d['expenses']) #print(average) 
          print(i_d.head())
          i_d.replace({'sex':{'male':0,'female':1}}, inplace=True)
          # encoding 'smoker' column 
          i_d.replace({'smoker':{'yes':0,'no':1}}, inplace=True)
          # encoding 'region' column 
          i_d.replace({'region':{'southeast':0,'southwest':1,'northeast':2,'northwest':3}}, inplace=True)
          
          
          
          X = i_d.drop(columns='expenses', axis=1) 
          Y = i_d['expenses']

          X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=2)
          reg = GradientBoostingRegressor()
          reg.fit(X_train, Y_train)
          
          
          
          training_data_prediction =reg.predict(X_train)

          r2_train = metrics.r2_score(Y_train, training_data_prediction) 
          print('R squared value : ', r2_train)

          test_data_prediction =reg.predict(X_test)

          r2_test = metrics.r2_score(Y_test, test_data_prediction)   
          print('R squared value : ', r2_test)
          input_data = []
          for i in range(len(temp)): 
               if i==0: 
                    input_data.append(temp['age']) 
               elif i==1: 
                    if temp['sex']=='female': 
                         input_data.append(1) 
                    else: 
                         input_data.append(0) 
               elif(i==2): 
                    input_data.append(temp['bmi']) 
               elif(i==3): 
                    input_data.append(temp['children']) 
               elif(i==4): 
                    if temp['smoker']=='yes': 
                         input_data.append(0) 
                    else: 
                         input_data.append(1) 
               elif(i==5): 
                    if temp['region']=='southeast': 
                         input_data.append(0) 
                    elif temp['region']=='southwest': 
                         input_data.append(1) 
                    elif temp['region']=='northeast': 
                         input_data.append(2) 
                    else: 
                         input_data.append(3)

          # changing input_data to a numpy array 
          input_data_as_numpy_array = np.asarray(input_data)
          # reshape the array 
          input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)
          prediction = reg.predict(input_data_reshaped) 
          #print('The insurance cost is USD', prediction[0]) 
          #output=[]
          output.append(f"{prediction[0]:.2f}")
          if(prediction[0]<average): 
               output.append("silver class") 
          else: 
               output.append("gold class")
     return JsonResponse(output,safe=False)
     
     

###DATA BASE APIS

@csrf_exempt
def DiseaseApi(request,id=0):
     if request.method == 'GET':
          diseases = Disease.objects.all()
          diseases_Serializer = DiseaseSerializer(diseases,many = True)
          return JsonResponse(diseases_Serializer.data,safe=False)
     
     elif request.method == 'POST':
          disease_data = JSONParser().parse(request)
          disease_Serializer = DiseaseSerializer(data = disease_data)
          if disease_Serializer.is_valid():
               disease_Serializer.save()
               return JsonResponse("Added Successfully!!" , safe=False)
          return JsonResponse("Failed to Update.",safe=False)
     
     elif request.method == 'PUT':
           disease_data = JSONParser().parse(request)
           disease = Disease.objects.get(disease_id=disease_data['disease_id'])
           disease_Serializer =DiseaseSerializer(disease,data=disease_data)
           if disease_Serializer.is_valid():
                disease_Serializer.save()
                return JsonResponse("Updated successfully!!",safe=False)
           return JsonResponse("Failed to Update.",safe=False)
     
     elif request.method == 'DELETE':
          disease = Disease.objects.get(disease_id = id)
          disease.delete()
          return JsonResponse("Deleted Successfully!!",safe=False)

@csrf_exempt
def PrecautionsApi(request):
     if request.method == 'POST':
          disease_names = JSONParser().parse(request)
          temp=disease_names['disease_name']
          precaus=Disease.objects.filter(disease_name=temp).values('precautions')
          return JsonResponse(dict(precs=list(precaus)))

@csrf_exempt
def SymptomnApi(request,id=0):
     if request.method == 'GET':
          symptoms = Symptom.objects.all()
          symptoms_Serializer = SymptomSerializer(symptoms,many = True)
          return JsonResponse(symptoms_Serializer.data,safe=False)
     
     elif request.method == 'POST':
          symptom_data = JSONParser().parse(request)
          symptom_Serializer = SymptomSerializer(data = symptom_data)
          if symptom_Serializer.is_valid():
               symptom_Serializer.save()
               return JsonResponse("Added Successfully!!" , safe=False)
          return JsonResponse("Failed to Update.",safe=False)

     elif request.method == 'PUT':
          symptom_data = JSONParser().parse(request)
          symptom = Symptom.objects.get(symptom_id=symptom_data['symptom_id'])
          symptom_Serializer =SymptomSerializer(symptom,data=symptom_data)
          if symptom_Serializer.is_valid():
                symptom_Serializer.save()
                return JsonResponse("Updated successfully!!",safe=False)
          return JsonResponse("Failed to Update.",safe=False)
     
     elif request.method == 'DELETE':
          symptom = Symptom.objects.get(symptom_id = id)
          symptom.delete()
          return JsonResponse("Deleted Successfully!!",safe=False)

@csrf_exempt
def MedicalHistoryApi(request,id=0):
     if request.method == 'GET':
          history = medical_history.objects.all()
          MedicalHistory_Serializer = medical_historySerializer(history,many = True)
          return JsonResponse(MedicalHistory_Serializer.data,safe=False)
     
     elif request.method == 'POST':
          history_data = JSONParser().parse(request)
          history_Serializer = medical_historySerializer(data = history_data)
          if history_Serializer .is_valid():
               history_Serializer .save()
               return JsonResponse("Added Successfully!!" , safe=False)
          return JsonResponse("Failed to Update.",safe=False)

     elif request.method == 'PUT':
          medicalHistory_data = JSONParser().parse(request)
          history = medical_history.objects.get(history_id=medicalHistory_data['history_id'])
          history_Serializer =medical_historySerializer(history,data=medicalHistory_data)
          if history_Serializer.is_valid():
                history_Serializer.save()
                return JsonResponse("Updated successfully!!",safe=False)
          return JsonResponse("Failed to Update.",safe=False)
     
     elif request.method == 'DELETE':
          history = medical_history.objects.get(history_id = id)
          history.delete()
          return JsonResponse("Deleted Successfully!!",safe=False)

@csrf_exempt
def QuestionApi(request,id=0):
     if request.method == 'GET':
          questions = Question.objects.all()
          questions_Serializer = QuestionSerializer(questions,many = True)
          return JsonResponse(questions_Serializer.data,safe=False)
     
     elif request.method == 'POST':
          question_data = JSONParser().parse(request)
          question_Serializer = QuestionSerializer(data = question_data)
          if question_Serializer.is_valid():
               question_Serializer.save()
               return JsonResponse("Added Successfully!!" , safe=False)
          return JsonResponse("Failed to Update.",safe=False)

     elif request.method == 'PUT':
          question_data = JSONParser().parse(request)
          question = Question.objects.get(question_id=question_data['question_id'])
          question_Serializer =QuestionSerializer(question,data=question_data)
          if question_Serializer.is_valid():
               question_Serializer.save()
               return JsonResponse("Updated successfully!!",safe=False)
          return JsonResponse("Failed to Update.",safe=False)
     
     elif request.method == 'DELETE':
          question = Question.objects.get(question_id = id)
          question.delete()
          return JsonResponse("Deleted Successfully!!",safe=False)

@csrf_exempt
def FeedbackApi(request,id=0):
     if request.method == 'GET':
          feedbacks = Feedback.objects.all()
          feedback_Serializer = FeedbackSerializer(feedbacks,many = True)
          return JsonResponse(feedback_Serializer.data,safe=False)
     
     elif request.method == 'POST':
          feedback_data = JSONParser().parse(request)
          feedback_Serializer = FeedbackSerializer(data = feedback_data)
          if feedback_Serializer.is_valid():
               feedback_Serializer.save()
               return JsonResponse("Added Successfully!!" , safe=False)
          return JsonResponse("Failed to Update.",safe=False)

     elif request.method == 'PUT':
          feedback_data = JSONParser().parse(request)
          feedback = Feedback.objects.get(feedback_id=feedback_data['feedback_id'])
          feedback_Serializer =FeedbackSerializer(feedback,data=feedback_data)
          if feedback_Serializer.is_valid():
               feedback_Serializer.save()
               return JsonResponse("Updated successfully!!",safe=False)
          return JsonResponse("Failed to Update.",safe=False)
     
     elif request.method == 'DELETE':
          feedback = Feedback.objects.get(feedback_id = id)
          feedback.delete()
          return JsonResponse("Deleted Successfully!!",safe=False)

@csrf_exempt
def patientApi(request,id=0):
     if request.method == 'GET':
        patient1 = patients.objects.all()
        patient_Serializer = patientSerializer(patient1,many = True)
        return JsonResponse(patient_Serializer.data,safe=False)
     
     elif request.method == 'POST':
          patient_data = JSONParser().parse(request)
          patient_Serializer = patientSerializer(data = patient_data)
          if patient_Serializer.is_valid():
          #print(patient_Serializer.is_valid())
          #if patient_Serializer.is_valid():
                patient_Serializer.save()
                return JsonResponse("Added Successfully!!" , safe=False)
          return JsonResponse("Failed to Update.",safe=False)
     
     elif request.method == 'PUT':
           patient_data = JSONParser().parse(request)
           patient = patients.objects.get(patient_id=patient_data['patient_id'])
           patient_Serializer =doctorSerializer(patient,data=patient_data)
           if patient_Serializer.is_valid():
                patient_Serializer.save()
                return JsonResponse("Updated successfully!!",safe=False)
           return JsonResponse("Failed to Update.",safe=False)
     
     elif request.method == 'DELETE':
        patient = patients.objects.get(patient_id = id)
        patient.delete()
        return JsonResponse("Deleted Successfully!!",safe=False)
@csrf_exempt
def appionmentApi(request,id=0):
     if request.method == 'GET':
          appionment1 = appionments.objects.all()
          appionment_Serializer = appionmentSerializer(appionment1,many = True)
          return JsonResponse(appionment_Serializer.data,safe=False)
     
     elif request.method == 'POST':
          appionment_data = JSONParser().parse(request)
          appionment_Serializer = appionmentSerializer(data = appionment_data)
            #print(appionment_Serializer)
          if appionment_Serializer.is_valid():
                appionment_Serializer.save()
                return JsonResponse("Added Successfully!!" , safe=False)
          return JsonResponse("Failed to Update.",safe=False)
     
     elif request.method == 'PUT':
           appionment_data = JSONParser().parse(request)
           appionment = appionments.objects.get(Appionment_id=appionment_data['Appionment_id'])
           appionment_Serializer =appionmentSerializer(appionment,data=appionment_data)
           if appionment_Serializer.is_valid():
                appionment_Serializer.save()
                return JsonResponse("Updated successfully!!",safe=False)
           return JsonResponse("Failed to Update.",safe=False)
     
     elif request.method == 'DELETE':
          appionment = appionments.objects.get(Appionment_id = id)
          appionment.delete()
          return JsonResponse("Deleted Successfully!!",safe=False)   

@csrf_exempt
def DoctorApi(request,id=0):
     if request.method == 'GET':
          doctor1 = doctors.objects.all()
          doctor_Serializer = doctorSerializer(doctor1,many = True)
          return JsonResponse(doctor_Serializer.data,safe=False)
     
     elif request.method == 'POST':
          doctor_data = JSONParser().parse(request)
          doctor_Serializer = doctorSerializer(data = doctor_data)
          if doctor_Serializer.is_valid():
               doctor_Serializer.save()
               return JsonResponse("Added Successfully!!" , safe=False)
          return JsonResponse("Failed to Update.",safe=False)
     
     elif request.method == 'PUT':
           doctor_data = JSONParser().parse(request)
           doctor = doctors.objects.get(doctor_id=doctor_data['doctor_id'])
           doctor_Serializer =doctorSerializer(doctor,data=doctor_data)
           if doctor_Serializer.is_valid():
                doctor_Serializer.save()
                return JsonResponse("Updated successfully!!",safe=False)
           return JsonResponse("Failed to Update.",safe=False)

     elif request.method == 'DELETE':
        doctor = doctors.objects.get(doctor_id = id)
        doctor.delete()
        return JsonResponse("Deleted Successfully!!",safe=False)


@csrf_exempt
def userApi(request,id=0):
     if request.method == 'POST':
        user_data = JSONParser().parse(request)
        user1= patients.objects.filter(patient_email=user_data['email'],patient_password=user_data['password']).exists()
        if user1:
                patient1 = patients.objects.all()
                patient_Serializer = patientSerializer(patient1,many = True)
                return JsonResponse(patient_Serializer.data,safe=False)
        return JsonResponse("Failed to Update.",safe=False)
@csrf_exempt
def userApidoc(request,id=0):
     if request.method == 'POST':
        user_data = JSONParser().parse(request)
        user1= doctors.objects.filter(doctor_email=user_data['email'],doctor_password=user_data['password']).exists()
        if user1:
            doctor1 = doctors.objects.all()
            doctor_Serializer = doctorSerializer(doctor1,many = True)
            return JsonResponse(doctor_Serializer.data,safe=False)

        return JsonResponse("Failed to Update.",safe=False)

@csrf_exempt
def AppointmentDoctorApi(request):
     if request.method == 'POST':
          doctor_id = JSONParser().parse(request)
          temp=doctor_id ['doctor_id']
          precaus=appionments.objects.filter(doctor_id =temp).values('Appionment_id','patient_name','doctor_firstname','Appionment_date','doctor','patient')
          return JsonResponse(dict(precs=list(precaus)))



          
