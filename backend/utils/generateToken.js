import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  // Set JWT as a HTTP-ONLY coockie
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'developent',
    sameSite: 'strict',
    masAge: 30 * 24 * 60 * 60 * 1000, // 30 Days
  });
};
export default generateToken;
