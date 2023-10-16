const mongoose = require('mongoose');

// Conexión a MongoDB
mongoose.connect('mongodb://admin:adminPassword@localhost:27017/petFeederDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Modelos
const User = require('../model/user.model');
const Pet = require('../model/pet.model');
const PetFeeder = require('../model/petFeeder.model');
const PetMonitor = require('../model/petMonitor.model');
const Alert = require('../model/alert.model');

// Creación y guardado de entidades

// Usuario
const user = new User({
  username: 'testUser',
  password: 'testPassword',
  email: 'test@example.com',
  token: 'someToken',
  pets: [],
  devices: {
    petFeeders: [],
    petMonitors: [],
  },
});

user.save((err, savedUser) => {
  if (err) throw err;

  // Mascota
  const pet = new Pet({
    name: 'Buddy',
    age: 3,
    breed: 'Beagle',
    weight: 15,
    user: savedUser._id,
    medicalHistory: [],
    feedingHistory: [],
  });

  pet.save((err, savedPet) => {
    if (err) throw err;

    // PetFeeder
    const petFeeder = new PetFeeder({
      model: 'BasicFeederV1',
      location: 'Kitchen',
      feedingSettings: [],
      lastRefill: new Date(),
      foodLevel: 100,
      user: savedUser._id,
    });

    petFeeder.save((err, savedPetFeeder) => {
      if (err) throw err;

      // PetMonitor
      const petMonitor = new PetMonitor({
        model: 'BasicMonitorV1',
        location: 'Living Room',
        locationHistory: [],
        streamingUrls: [],
        user: savedUser._id,
      });

      petMonitor.save((err, savedPetMonitor) => {
        if (err) throw err;

        // Alerta
        const alert = new Alert({
          type: 'LowFood',
          message: 'The food level in the feeder is low.',
          date: new Date(),
          seen: false,
          user: savedUser._id,
        });

        alert.save((err, savedAlert) => {
          if (err) throw err;

          // Actualización del usuario con referencias
          savedUser.pets.push(savedPet._id);
          savedUser.devices.petFeeders.push(savedPetFeeder._id);
          savedUser.devices.petMonitors.push(savedPetMonitor._id);
          savedUser.save((err) => {
            if (err) throw err;

            // Cerrar conexión a la base de datos
            mongoose.connection.close();
          });
        });
      });
    });
  });
});