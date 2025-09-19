const API_BASE_URL = 'http://188.120.248.233:3001/api';

export interface FormData {
  name: string;
  phone: string;
  email?: string;
  message?: string;
  service?: string;
}

export interface CallbackData {
  phone: string;
  name?: string;
}

export const sendForm = async (data: FormData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/send-form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.error || 'Ошибка отправки формы');
    }
    
    return result;
  } catch (error) {
    console.error('Ошибка отправки формы:', error);
    throw error;
  }
};

export const requestCallback = async (data: CallbackData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/callback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.error || 'Ошибка заказа звонка');
    }
    
    return result;
  } catch (error) {
    console.error('Ошибка заказа звонка:', error);
    throw error;
  }
};