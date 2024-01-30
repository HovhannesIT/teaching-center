TLCenter.info


[Technical DB Schema]


Auth
___________________

Id - [bigUnsignedInteger/ autoIncrement]
accessToken [string]
refreshToken [string]
userId [bigUnsignedInteger]
updatedAt [Date]
createdAt [Date]


User
————————————
Id - [bigUnsignedInteger/ autoIncrement]
firstName - [string]
lastName - [string]!
username - [string]
email - [string]
password - [string] 
type - enum[teacher/student/both]
professionId - [bigUnsignedInteger]
phoneNumber - [string]
primaryCommunicationType - enum[zoom/skype/google.meet]
birthDate - [date]
avatar - [string]!
updatedAt - [Date]
createdAt - [Date]


Profession
____________________
Id - [bigUnsignedInteger/ autoIncrement]
name - [string]
updatedAt - [Date]
createdAt - [Date]


Seeking.Looking
____________________
Id - [bigUnsignedInteger/ autoIncrement]
professionId - [bigUnsignedInteger]
name - [string]
description - [string] 
userId - [bigUnsignedInteger]
communicationType - enum [zoom/skype/google.meet]
updatedAt - [Date]
createdAt - [Date]


Contract
____________________
Id - [bigUnsignedInteger/ autoIncrement]
title - [string]
professionId - [bigUnsignedInteger]	
teacherId - [bigUnsignedInteger]
studentId - [bigUnsignedInteger]
language - [string]
description - [string]
priceType - enum[one.time.fixed/each.lesson]
contractTypeId - [bigUnsignedInteger]
price - [bigInteger]
currency - enum[$/€/֏]
updatedAt - [Date]
createdAt - [Date]


ContractTypes
____________________
Id - [bigUnsignedInteger/ autoIncrement]
name - enum[oneTime / longTerm]
startDate - [Date]
endDate - [Date]
updatedAt [Date]
createdAt [Date]


Invitations
____________________
Id - [bigUnsignedInteger/ autoIncrement]
contractId - enum[bigUnsignedInteger]
applyerId - [bigUnsignedInteger]
subscriberId [bigUnsignedInteger]
updatedAt - [Date]
createdAt - [Date]


[REST-API Interface]

app/info[GET]

auth / sign-in [public][POST]
auth / sign-up [public][POST]
auth / sign-out [private][DELETE]
auth / refresh-tokens [private][PUT]

user / user-info [private][GET]
user / update-user-info [private][POST]
user / avatar [public][GET]
user / set-avatar [private][POST]

seeking.looking / open [private][PUT]
seeking.looking / apply/ :id [private][POST]
seeking.looking / list / :type(global/current) [public][GET]

contract / list [private][GET]
contract / apply-invitation [private][POST]

profession / list [public][GET]
