# 🏍️ RideZone Parking System - Spring Boot Backend

A comprehensive bike and car parking reservation system built with Spring Boot and Supabase (PostgreSQL).

## 🚀 Features

- **Parking Area Management**: Multiple zones for cars, bikes, and mixed vehicles
- **Real-time Slot Availability**: Track available, reserved, and occupied slots
- **Reservation System**: Book parking slots with time validation
- **QR Code Integration**: Unique QR codes for entry and exit
- **Fine Calculation**: Automatic fine calculation for late exits
- **Feedback System**: User ratings and comments
- **RESTful API**: Clean and documented API endpoints

## 📋 Prerequisites

- Java 17 or higher
- Maven 3.6+
- Supabase account (free tier available)
- IDE (IntelliJ IDEA, Eclipse, or VS Code)

## 🔧 Setup Instructions

### 1. Supabase Configuration

1. Go to [Supabase](https://supabase.com) and create a new project
2. Navigate to **Settings** > **Database**
3. Copy your connection details:
   - Host
   - Database name
   - Port (usually 5432)
   - Password

### 2. Update Application Properties

Edit `src/main/resources/application.properties`:

```properties
# Replace with your Supabase credentials
spring.datasource.url=jdbc:postgresql://YOUR_PROJECT_REF.supabase.co:5432/postgres
spring.datasource.username=postgres
spring.datasource.password=YOUR_PASSWORD
```

### 3. Build and Run

```bash
# Build the project
mvn clean install

# Run the application
mvn spring-boot:run
```

The API will start on `http://localhost:8080`

### 4. Initialize Database

After starting the application, call the init endpoint to create areas and slots:

```bash
curl -X POST http://localhost:8080/api/parking/init
```

## 📡 API Endpoints

### Parking Areas

- **GET** `/api/parking/areas` - Get all parking areas
- **GET** `/api/parking/areas/{areaCode}/slots` - Get slots for a specific area

### Reservations

- **GET** `/api/parking/reservations/{userId}` - Get user reservations
- **POST** `/api/parking/reservations` - Create new reservation
- **POST** `/api/parking/reservations/{qrId}/entry` - Simulate entry
- **POST** `/api/parking/reservations/{qrId}/exit` - Simulate exit
- **DELETE** `/api/parking/reservations/{id}` - Cancel reservation

### Feedback

- **POST** `/api/feedback` - Submit feedback
- **GET** `/api/feedback/recent` - Get recent feedback

## 📦 Project Structure

```
src/main/java/com/ridezone/parking/
├── config/           # Configuration classes (CORS)
├── controller/       # REST Controllers
├── dto/             # Data Transfer Objects
├── model/           # JPA Entities
├── repository/      # Spring Data JPA Repositories
└── service/         # Business Logic
```

## 🗄️ Database Schema

### Tables

- **parking_areas**: Stores parking zones (Car, Bike, Mixed)
- **parking_slots**: Individual parking spots
- **reservations**: Booking records with QR codes
- **feedback**: User ratings and comments

## 🔄 Sample Request

### Create Reservation

```json
POST /api/parking/reservations
Content-Type: application/json

{
  "userId": "guest",
  "areaCode": "A",
  "slotNumber": 5,
  "vehicleReg": "KA01AB1234",
  "vehicleType": "car",
  "startAt": "2025-10-23T10:00:00",
  "endAt": "2025-10-23T14:00:00"
}
```

### Response

```json
{
  "success": true,
  "message": "Reservation created successfully",
  "data": {
    "id": 1,
    "qrId": "uuid-here",
    "status": "reserved",
    ...
  }
}
```

## 🧪 Testing

You can test the API using:
- Postman
- curl
- Built-in Swagger UI (if configured)
- Your frontend application

## 📝 Notes

- The application uses Hibernate's `ddl-auto=update` to automatically create/update tables
- Default timezone is system timezone
- CORS is configured for localhost:3000, 5500 (add your frontend URLs)
- Fine calculation: ₹50 per hour after 10-minute grace period

## 🐛 Troubleshooting

**Database Connection Issues:**
- Verify your Supabase credentials
- Check if your IP is whitelisted in Supabase
- Ensure PostgreSQL driver is in classpath

**Port Already in Use:**
- Change port in `application.properties`: `server.port=8081`

**Build Errors:**
- Ensure Java 17+ is installed: `java -version`
- Clean Maven cache: `mvn clean`

## 🔐 Security Notes

- Never commit `application.properties` with real credentials
- Use environment variables for production
- Consider adding Spring Security for authentication
- Implement rate limiting for production use

## 📄 License

MIT License - Feel free to use for personal and commercial projects.

---

Built with ❤️ using Spring Boot & Supabase
