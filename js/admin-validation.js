function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="RCSSfamily"&& password=="Ilovemyfamily152718!")
{
	alert("Login Successful");
	return false;
}

else
{
	alert("Login Incorrect/Fail")
}

}