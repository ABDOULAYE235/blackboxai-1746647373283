const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Utilisateurs de démonstration
const demoUsers = {
  'admin@archivist.fr': { password: 'admin123', role: 'admin' },
  'user@archivist.fr': { password: 'user123', role: 'user' }
};

// POST /login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email et mot de passe requis' });
  }

  const user = demoUsers[email];
  if (!user) {
    return res.status(401).json({ message: 'Utilisateur non trouvé' });
  }

  if (user.password !== password) {
    return res.status(401).json({ message: 'Mot de passe incorrect' });
  }

  const token = jwt.sign(
    { email: email, role: user.role },
    'votre_secret_temporaire',
    { expiresIn: '1h' }
  );

  res.json({
    token,
    user: { email, role: user.role }
  });
});

module.exports = router;
