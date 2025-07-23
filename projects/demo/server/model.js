import { DataTypes, Model } from 'sequelize';
import sequelize from './db.js';

class User extends Model {}

User.init(
  {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
  },
);

export default User;
