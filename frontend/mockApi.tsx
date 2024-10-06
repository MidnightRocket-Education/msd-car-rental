export const mockFetchCars = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
            {
                id: '1',
                name: 'Toyota Corolla',
                price: 50,
                location: 'New York',
                fuelType: 'Gasoline',
                seats: 5,
                image: 'https://via.placeholder.com/150',
                ownerId: '100',
                ownerName: 'Denisa Noway',
                },
                {
                id: '2',
                name: 'Tesla Model 3',
                price: 100,
                location: 'Los Angeles',
                fuelType: 'Electric',
                seats: 5,
                image: 'https://via.placeholder.com/150',
                ownerId: '101',
                ownerName: 'John Doe',
                },
                {
                id: '3',
                name: 'Honda Civic',
                price: 45,
                location: 'Miami',
                fuelType: 'Gasoline',
                seats: 5,
                image: 'https://via.placeholder.com/150',
                ownerId: '102',
                ownerName: 'Jane Smith',
                },
        ]);
      }, 0);
    });
  };
  