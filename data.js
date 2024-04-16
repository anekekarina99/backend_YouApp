const mongoose = require('mongoose');

// Koneksi ke database MongoDB
mongoose.connect('mongodb://localhost:27017/db_hrs', { useNewUrlParser: true, useUnifiedTopology: true });

// Definisikan skema untuk dokumen pengguna
const userSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true }, // Added _id field
  username: String,
  password: String,
  email: String,
  profile: {
    fullName: String,
    displayName: String,
    gender: String,
    birthday: Date,
    horoscope: String,
    zodiac: String,
    height: String,
    weight: String,
    interest: [String],
    profileImage: {
      imageId: mongoose.Schema.Types.ObjectId,
      imageUrl: String,
      imageFileName: String,
      imageFileType: String,
      imageFileSize: String
    }
  },
  interested: [String],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Buat model User berdasarkan skema
const User = mongoose.model('User', userSchema);

// Data beberapa pengguna yang akan disisipkan
const usersData = [
  {
    username: 'user1',
    password: 'password1',
    email: 'user1@example.com',
    profile: {
      fullName: 'User One',
      displayName: 'User1',
      gender: 'Male',
      birthday: new Date('1990-01-01'),
      horoscope: 'Capricorn',
      zodiac: 'Capricorn',
      height: '170 cm',
      weight: '70 kg',
      interest: ['Reading', 'Gaming', 'Traveling'],
      profileImage: {
        imageId: mongoose.Types.ObjectId(),
        imageUrl: 'https://example.com/images/user1.jpg',
        imageFileName: 'user1.jpg',
        imageFileType: 'image/jpeg',
        imageFileSize: '1024'
      }
    }
  },
  {
    username: 'user2',
    password: 'password2',
    email: 'user2@example.com',
    profile: {
      fullName: 'User Two',
      displayName: 'User2',
      gender: 'Female',
      birthday: new Date('1995-05-05'),
      horoscope: 'Taurus',
      zodiac: 'Taurus',
      height: '160 cm',
      weight: '55 kg',
      interest: ['Painting', 'Dancing', 'Cooking'],
      profileImage: {
        imageId: mongoose.Types.ObjectId(),
        imageUrl: 'https://example.com/images/user2.jpg',
        imageFileName: 'user2.jpg',
        imageFileType: 'image/jpeg',
        imageFileSize: '1024'
      }
    }
  },
  {
    username: 'user3',
    password: 'password3',
    email: 'user3@example.com',
    profile: {
      fullName: 'User Three',
      displayName: 'User3',
      gender: 'Male',
      birthday: new Date('1985-08-15'),
      horoscope: 'Leo',
      zodiac: 'Leo',
      height: '175 cm',
      weight: '80 kg',
      interest: ['Swimming', 'Photography', 'Cycling'],
      profileImage: {
        imageId: mongoose.Types.ObjectId(),
        imageUrl: 'https://example.com/images/user3.jpg',
        imageFileName: 'user3.jpg',
        imageFileType: 'image/jpeg',
        imageFileSize: '1024'
      }
    }
  }
];

// Menyisipkan data pengguna ke dalam database
User.insertMany(usersData)
  .then(users => {
    console.log('Pengguna berhasil disisipkan:', users);
  })
  .catch(error => {
    console.error('Gagal menyisipkan pengguna:', error);
  });
