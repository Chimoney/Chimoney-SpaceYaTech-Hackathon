from django.urls import path
from users.views import user_login, users_list, register, edit_user, delete_user
from django.contrib.auth.views import LogoutView


urlpatterns = [
    path("login/", user_login, name="login"),
    path("register/", register, name="register"),
    path("logout/", LogoutView.as_view(), name="logout"),
    path("users-list/", users_list, name="users-list"),
    path("edit-user/", edit_user, name="edit-user"),
    path("delete-user/<int:id>/", delete_user, name="delete-user"),
]