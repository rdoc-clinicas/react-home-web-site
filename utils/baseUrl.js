const baseUrl = process.env.NODE_ENV === "production"
? 'https://tech-medical.ar'
: 'http://localhost:3000';

export default baseUrl;
