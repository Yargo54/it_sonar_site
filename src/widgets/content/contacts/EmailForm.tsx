import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

type SubmitStatus = 'success' | 'error' | null;

export const EmailForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Имя обязательно';

    if (!formData.email.trim()) {
      newErrors.email = 'Email обязателен';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Некорректный email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Ошибка отправки:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getButtonText = () => {
    if (isSubmitting) return 'Отправка...';
    return submitStatus === 'error' ? 'Отправить повторно' : 'Отправить сообщение';
  };

  return (
    <div className='bg-white rounded-lg shadow-md p-6 w-full max-w-md'>
      {submitStatus === 'success' && (
        <div className='mb-4 p-4 bg-green-100 text-green-700 rounded-md'>
          Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className='mb-4 p-4 bg-red-100 text-red-700 rounded-md'>
          Произошла ошибка при отправке. Пожалуйста, попробуйте позже.
        </div>
      )}

      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1'>
            Ваше имя <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.name
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-blue-500'
            }`}
            placeholder='Иван Иванов'
          />
          {errors.name && <p className='mt-1 text-sm text-red-600'>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>
            Ваш email <span className='text-red-500'>*</span>
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.email
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-blue-500'
            }`}
            placeholder='ivan@example.com'
          />
          {errors.email && <p className='mt-1 text-sm text-red-600'>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-1'>
            Ваши комментарии
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            className={`
    w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2
    min-h-[3.5rem]  /* Примерная высота 2 строк (~3.5rem) */
    resize-none      /* Отключает ресайзер */
    ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}
  `}
            placeholder='Ваши комментарии...'
            rows={2}
          />
          {errors.message && <p className='mt-1 text-sm text-red-600'>{errors.message}</p>}
        </div>

        <div>
          <button
            type='submit'
            disabled={isSubmitting}
            className={`w-full py-2 px-4 rounded-md text-white focus:outline-none ${
              isSubmitting
                ? 'bg-[#4C545F] cursor-not-allowed opacity-70'
                : 'bg-[#4C545F] hover:bg-[#3A4048] transition duration-200'
            }`}
          >
            {getButtonText()}
          </button>
        </div>
      </form>
    </div>
  );
};
