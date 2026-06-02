# Auditoría QA

## Proyecto auditado
Nombre del estudiante: Duvan Rodriguez 

## Verificaciones realizadas

- docker compose up ⚠️
- Aplicación ejecutándose ❌
- Pruebas Jest ejecutadas ❌

## Resultado

El proyecto logró construir correctamente la imagen Docker y crear el contenedor sin errores críticos durante el proceso de compilación.


El contenedor inició correctamente, pero al momento de ejecutar las pruebas automatizadas se presentó el siguiente error:

```bash
sh: jest: not found
```

Posteriormente, el contenedor finalizó con:

```bash
cityfix-container exited with code 127
```

Este error indica que Jest no se encuentra instalado o no está disponible dentro del contenedor Docker.

## Solución aplicada / recomendada

Se recomienda instalar Jest como dependencia del proyecto ejecutando:

```bash
npm install --save-dev jest
```

Después de instalar Jest, verificar que el archivo `package.json` incluya correctamente el script de pruebas:

```json
"scripts": {
  "test": "jest"
}
```

Luego reconstruir el contenedor ejecutando:

```bash
docker compose build --no-cache
docker compose up
```

También se recomienda verificar que la carpeta `node_modules` se instale correctamente dentro del contenedor y que Jest aparezca dentro de las dependencias del proyecto.

## Observaciones

Debido a la ausencia de Jest:

- Las pruebas automatizadas no pudieron ejecutarse
- La aplicación no logró completar correctamente el flujo de validación
- El contenedor terminó con error código 127

## Conclusión

El proyecto presenta un problema de configuración relacionado con la ausencia de Jest dentro del entorno Docker.

Aunque la imagen y el contenedor fueron creados correctamente, no fue posible validar las pruebas automatizadas debido al error detectado durante la auditoría.

El problema puede solucionarse instalando correctamente Jest y reconstruyendo el contenedor Docker.