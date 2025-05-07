CREATE DATABASE IF NOT EXISTS archivistdb;
USE archivistdb;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL
);

-- Insérer les utilisateurs de démonstration (les mots de passe seront hachés par bcrypt dans l'application)
INSERT INTO users (email, password, role) VALUES
('admin@archivist.fr', '$2b$10$YourHashedPasswordHere', 'admin'),
('user@archivist.fr', '$2b$10$YourHashedPasswordHere', 'user');
