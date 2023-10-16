# miDbPet/Dockerfile

# Usar una imagen de Node.js
FROM node:14

# Crear un directorio de trabajo
WORKDIR /usr/src/app

# Copiar los archivos de paquete y paquete de bloqueo
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar los scripts de inicialización y semillas y modelos
COPY data/ ./data/
COPY model/ ./model/

# Copiar el código fuente necesario para inicialización
COPY data/init-mongo.js ./init-mongo.js

# Comando para ejecutar la inicialización
CMD [ "node", "init-mongo.js" ]