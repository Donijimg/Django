from django.shortcuts import render
def saludar(request,name,age):
  context={
  "name":name,
  "age":age
  }
  return render(request,"saludo.html",context)