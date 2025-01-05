from django.conf.urls import url
from DiseaseApp import views

urlpatterns = [
    url(r'^disease/$',views.DiseaseApi),
    url(r'^disease/([0-9]+)$',views.DiseaseApi),
    url(r'^symptom/$',views.SymptomnApi),
    url(r'^symptom/([0-9]+)$',views.SymptomnApi),
    url(r'^precautions/$',views.PrecautionsApi),
    url(r'^medical_history/$',views.MedicalHistoryApi),
    url(r'^medical_history/([0-9]+)$',views.MedicalHistoryApi),
    url(r'^question/$',views.QuestionApi),
    url(r'^question/([0-9]+)$',views.QuestionApi),
    url(r'^feedback/$',views.FeedbackApi),
    url(r'^feedback/([0-9]+)$',views.FeedbackApi),
    #url(r'^insurancePrediction/$',views.predictinsurance)
    #url(r'^feedback/([0-9]+)$',views.patientApi),
    url(r'^patient/([0-9]+)$',views.patientApi),
    url(r'^patient/$',views.patientApi),
    url(r'^appionment/([0-9]+)$',views.appionmentApi),
    url(r'^appionment/',views.appionmentApi),
    #path('doctor/',views.doctorlist.as_view())
    url(r'^doctor/([0-9]+)$',views.DoctorApi),
    url(r'^doctor/',views.DoctorApi),
    #url(r'^doctor/([0-9]+)$',views.DoctorApi),
    url(r'^patientlogin/',views.userApi),
    url(r'^doctorlogin/',views.userApidoc),
    url(r'^getAppointmets/',views.AppointmentDoctorApi)
]