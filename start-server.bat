@echo off
echo Intentando liberar puerto 3001...
netstat -ano | findstr :3001 > nul && (
  for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3001') do (
    taskkill /PID %%a /F
    echo Proceso %%a terminado
  )
) || echo Puerto 3001 libre

echo Iniciando JSON Server...
json-server --watch db.json --port 3001