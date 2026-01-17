import { useState, useEffect } from 'react';

import { getEvents } from '@/services/getEvents';

export interface Event {
  title: string;
  description: string;
  date: string;
  location: string;
  url_image: string;
  url_provider: string;
}

export const useEvents = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const events = await getEvents();

        setEvents(events.data);
      } catch (error) {
        console.error('Error fetching events:', error);
        setEvents([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return { events, isLoading };
};
