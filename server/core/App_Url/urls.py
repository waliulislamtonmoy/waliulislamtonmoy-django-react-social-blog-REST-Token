from django.urls import path,include


from App_blog.views import BlogView
from App_Account.views import ProfileView

from rest_framework import routers
router = routers.DefaultRouter()
router.register(r'blogs', BlogView,basename='blogs')

urlpatterns = [
   path("profile/",ProfileView.as_view(),name="profile")
]
urlpatterns+=router.urls