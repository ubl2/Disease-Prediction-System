from rest_framework import serializers
from DiseaseApp.models import UserType,Admin,Disease,Feedback,Insurance,medical_history,Question,patients,Symptom,appionments,doctors

class UserTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserType
        fields = ('type_id','type_name')

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = ('admin_id','usertype','admin_firstname','admin_lastname','admin_email','admin_password')

"""class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ('appointment_id','appointment_date')
"""
class DiseaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disease
        fields = ('disease_id','disease_name','symp','probability','precautions')

"""class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ('doctor_id','usertype','doctor_firstName','doctor_lastName','doctor_email','doctor_password','gender')
"""
class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ('feedback_id','question','rating')

class InsuranceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Insurance
        fields = ('insurance_id','insurance_name')

class medical_historySerializer(serializers.ModelSerializer):
    class Meta:
        model = medical_history
        fields = ('history_id','patient','disease','symptom','date')

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ('question_id','question_name')

"""class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ('patient_id','usertype','patient_firstname','patient_lastname','address','age','weight','phone_number','gender',
'patient_email','patient_password')
"""
class SymptomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Symptom
        fields = ('symptom_id','symptom_name')

class patientSerializer(serializers.ModelSerializer):
    class Meta:
        model=patients 
        fields= ('patient_id','patient_name','age','phone_number','patient_email','patient_password','patient_dob')

class appionmentSerializer(serializers.ModelSerializer):
    class Meta:
        model=appionments
        fields=('Appionment_id','patient_name','doctor_firstname','Appionment_date','doctor','patient')

class doctorSerializer(serializers.ModelSerializer):
    class Meta:
        model=doctors
        fields=('doctor_id','doctor_name','age','phone_number','doctor_email','doctor_password','doctor_dob')
