@echo off
echo Please write any name for migrations, tanks!
@set /p var=

rd /s /q sonny.webapi\migrations
dotnet ef database drop  --project sonny.webapi -f

dotnet ef migrations add %var% --project sonny.webapi

dotnet ef database update --project sonny.webapi
@Echo off
pause
Echo TA LIBERADO, PRONTO PARA TENTAR DE NOVO.
