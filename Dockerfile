# 1. Imagen base de Node.js
FROM node:18

# 2. Directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiar solo los archivos necesarios
COPY package*.json ./

# 4. Instalar dependencias
RUN npm install

# 5. Copiar el resto del código
COPY . .

# 6. Definir variable de entorno para producción
ENV NODE_ENV=production

# 7. Exponer el puerto que usas en tu app
EXPOSE 5000

# 8. Comando para iniciar la app
CMD ["node", "index.js"]