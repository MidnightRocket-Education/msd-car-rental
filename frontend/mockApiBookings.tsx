export const mockFetchBookings = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          currentBookings: [
            {
              id: '1',
              name: 'Tesla Model 3',
              location: 'San Francisco',
              startDate: '2024-01-10T09:00:00',
              endDate: '2024-01-12T18:00:00',
              rating: 5
            }
          ],
          oldBookings: [
            {
              id: '2',
              name: 'Toyota Camry',
              location: 'Chicago',
              startDate: '2023-09-01T08:00:00',
              endDate: '2023-09-05T12:00:00',
              rating: 4
            },
            {
              id: '3',
              name: 'Honda Accord',
              location: 'Miami',
              startDate: '2023-08-15T10:00:00',
              endDate: '2023-08-20T17:00:00',
              rating: 5
            }
          ]
        });
      }, 0);
    });
  };
  