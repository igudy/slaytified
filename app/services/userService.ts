import { fetchAPI } from './api';

export interface User {
  _id?: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'user' | 'manager';
  phoneNumber?: string;
}

export const userService = {
  // Get all users
  async getAllUsers(): Promise<User[]> {
    return fetchAPI('/users');
  },

  // Get single user
  async getUser(id: string): Promise<User> {
    return fetchAPI(`/users/${id}`);
  },

  // Create user
  async createUser(user: Omit<User, '_id'>): Promise<User> {
    return fetchAPI('/users', {
      method: 'POST',
      body: JSON.stringify(user),
    });
  },

  // Update user
  async updateUser(id: string, user: Partial<User>): Promise<User> {
    return fetchAPI(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(user),
    });
  },

  // Delete user
  async deleteUser(id: string): Promise<void> {
    return fetchAPI(`/users/${id}`, {
      method: 'DELETE',
    });
  },
};
