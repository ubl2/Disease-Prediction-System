from django.db import models

# Create your models here.
from django.db import models

class UserType(models.Model):
    type_id = models.AutoField(primary_key=True)
    type_name = models.CharField(max_length=20)

class Symptom(models.Model):
    symptom_id = models.AutoField(primary_key=True)
    symptom_name = models.CharField(max_length=100) 

class Disease(models.Model):
    disease_id = models.AutoField(primary_key=True)
    disease_name = models.CharField(max_length=100)
    symp=models.ForeignKey(Symptom,on_delete=models.CASCADE)
    probability = models.IntegerField()
    precautions = models.CharField(max_length=1000)

'''class Doctor(models.Model):
    doctor_id = models.AutoField(primary_key=True)
    usertype  = models.ForeignKey(UserType, on_delete = models.CASCADE)
    doctor_firstName = models.CharField(max_length=100)
    doctor_lastName = models.CharField(max_length=100)
    doctor_email = models.CharField(max_length=80)
    doctor_password = models.CharField(max_length=8)
    gender = models.CharField(max_length=100)'''

"""class Patient(models.Model):
    patient_id = models.AutoField(primary_key=True)
    usertype  = models.ForeignKey(UserType, on_delete = models.CASCADE)
    patient_firstname = models.CharField(max_length=100)
    patient_lastname = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    age = models.IntegerField()
    weight = models.IntegerField()
    phone_number = models.IntegerField()
    gender = models.CharField(max_length=100)
    patient_email = models.CharField(max_length=80)
    patient_password = models.CharField(max_length=8)
"""
class Admin(models.Model):
    admin_id = models.AutoField(primary_key=True)
    usertype  = models.ForeignKey(UserType, on_delete = models.CASCADE)
    admin_firstname = models.CharField(max_length=100)
    admin_lastname = models.CharField(max_length=100)
    admin_email = models.CharField(max_length=80)
    admin_password = models.CharField(max_length=8)


class medical_history(models.Model):
    history_id = models.AutoField(primary_key=True)
    #patients  = models.ForeignKey(Patient, on_delete = models.CASCADE)
    disease = models.ForeignKey(Disease,on_delete = models.CASCADE)
    symptom = models.ForeignKey(Symptom,on_delete = models.CASCADE)
    date = models.DateField()

class Insurance(models.Model):
    insurance_id = models.AutoField(primary_key=True)
    insurance_name = models.CharField(max_length=100)
"""
class Appointment(models.Model):
    appointment_id = models.AutoField(primary_key=True)
    appointment_date = models.DateField()
"""
class Question(models.Model):
    question_id = models.AutoField(primary_key=True)
    question_name = models.CharField(max_length=200)

class Feedback(models.Model):
    feedback_id = models.AutoField(primary_key=True)
    question = models.ForeignKey(Question,on_delete=models.CASCADE)
    rating = models.IntegerField()
    '''doctor_id = models.ForeignKey(Doctor,on_delete=models.CASCADE)
    patient_id = models.ForeignKey(Patient,on_delete=models.CASCADE)'''

class patients(models.Model):
    patient_id = models.AutoField(primary_key=True)
    #usertype  = models.ForeignKey(UserType, on_delete = models.CASCADE)
    patient_name = models.CharField(max_length=100)
    #patient_lastname = models.CharField(max_length=100)
    #address = models.CharField(max_length=100)
    age = models.IntegerField(blank=True, null=True)
    #weight = models.IntegerField(blank=True, null=True)
    phone_number = models.IntegerField(blank=True, null=True)
    #gender = models.CharField(max_length=5)
    patient_email = models.CharField(max_length=50)
    patient_password = models.CharField(max_length=50)
    patient_dob=models.DateField(auto_now_add=True)

class doctors(models.Model):
    doctor_id = models.AutoField(primary_key=True)
    #usertype  = models.ForeignKey(UserType, on_delete = models.CASCADE)
    doctor_name = models.CharField(max_length=100)
    #patient_lastname = models.CharField(max_length=100)
    #address = models.CharField(max_length=100)
    age = models.IntegerField(blank=True, null=True)
    #weight = models.IntegerField(blank=True, null=True)
    phone_number = models.IntegerField(blank=True, null=True)
    #gender = models.CharField(max_length=5)
    doctor_email = models.CharField(max_length=50)
    doctor_password = models.CharField(max_length=50)
    doctor_dob=models.DateField(auto_now_add=True)
   # disease_id=models.ForeignKey(Disease, on_delete=models.CASCADE)

class appionments(models.Model):
    Appionment_id=models.AutoField(primary_key=True)
    patient_name = models.CharField(max_length=100)
    doctor_firstname=models.CharField(max_length=100)
   # patient_id = models.AutoField(primary_key=True)
    #doctor_id=models.AutoField(primary_key=True)
    #Appionment_first_name=models.CharField(max_length=50)
    #Appionment_last_name=models.CharField(max_length=50)
    #Appionment_email=models.CharField(max_length=50)
    #Appionment_phone=models.CharField(max_length=10)
    #Appionment_request=models.TextField(blank=True)
    Appionment_date=models.DateTimeField()
    doctor = models.ForeignKey(doctors,on_delete=models.CASCADE)
    patient = models.ForeignKey(patients,on_delete=models.CASCADE)
    #accepted=models.BooleanField(default=False)
    #accepted_date=models.DateField(auto_now_add=False)
