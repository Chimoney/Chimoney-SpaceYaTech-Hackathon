from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required

from users.models import User
from .forms import LoginForm
# Create your views here.
def user_login(request):
    form = LoginForm(request.POST or None)

    msg = None

    if request.method == "POST":
        if form.is_valid():
            username = form.cleaned_data.get("username")
            password = form.cleaned_data.get("password")
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect("/")
            else:
                messages.error(request, "Invalid Credentials, Try Again")
        else:
            messages.error(request, "Error Valid Details, Try Again")

    return render(request, "users/login.html", {"form": form, "msg": msg})


@login_required(login_url="/users/login")
def users_list(request):
    user = request.user
    users = User.objects.all()

    if not user.is_superuser:
        users = User.objects.filter(id=user.id)

    context = {
        "users": users
    }

    return render(request, "users/users_list.html", context)



def register(request):
    if request.method == 'POST':
        username = request.POST.get("id_number")
        email = request.POST.get("email")
        first_name = request.POST.get("first_name")
        last_name = request.POST.get("last_name")
        gender = request.POST.get("gender")
        role = request.POST.get("role")
        phone_number = request.POST.get("phone_number")
        id_number = request.POST.get("id_number")
        position = request.POST.get("position")

        user_by_email = User.objects.filter(email=email).first()
        user_by_username = User.objects.filter(username=username).first()


        if user_by_email:
            messages.error(request, f"User with this email exists already, try a different email!!")

        elif user_by_username:
            messages.error(request, f"User with this username exists already, try a different username!!")

            print(username, email, first_name, last_name)
        else:
            user = User.objects.create(
                first_name=first_name, 
                last_name=last_name, 
                username=username,
                email=email,
                role=role,
                gender=gender,
                phone_number=phone_number,
                id_number=id_number,
                position=position
            )
            user.set_password("1234")
            user.save()
            messages.success(request, f"User created successfully!!")

            return redirect('users-list')
    
    
    return render(request, 'modals/new_user.html',)


def edit_user(request):
    if request.method == "POST":
        username = request.POST.get("username")
        email = request.POST.get("email")
        first_name = request.POST.get("first_name")
        last_name = request.POST.get("last_name")
        gender = request.POST.get("gender")
        role = request.POST.get("role")
        phone_number = request.POST.get("phone_number")
        id_number = request.POST.get("id_number")
        position = request.POST.get("position")
        user_id = int(request.POST.get("user_id"))

        user = User.objects.get(id=user_id)

        user.username = username if username else user.username
        user.email = email if email else user.email
        user.first_name = first_name if first_name else user.first_name
        user.last_name = last_name if last_name else user.last_name
        user.gender = gender if gender else user.gender
        user.role = role if role else user.role
        user.phone_number = phone_number if phone_number else user.phone_number
        user.id_number = id_number if id_number else user.id_number
        user.position = position if position else user.position
        user.save()
        return redirect("users-list")

    return render(request, "modals/edit_user.html")


def delete_user(request, id=None):
    user = User.objects.get(id=id)
    user.delete()
    return redirect("users-list")