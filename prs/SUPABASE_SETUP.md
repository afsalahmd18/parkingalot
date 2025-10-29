# 🔧 Supabase Connection Setup Guide

## Issue: Database Connection Failed

The backend is trying to connect but can't reach the Supabase database. Here's how to fix it:

## 📝 Steps to Get Correct Supabase Connection Details:

### 1. Go to your Supabase Project Dashboard
   - Visit: https://supabase.com/dashboard

### 2. Select your project: `ujxwaisatoycvroccghw`

### 3. Go to **Settings** (gear icon) → **Database**

### 4. Look for **Connection String** section

### 5. Find and copy the **Connection pooling** or **Direct connection** URI

It should look like:
```
postgresql://postgres.[PROJECT_REF]:[PASSWORD]@aws-0-[region].pooler.supabase.com:5432/postgres
```

OR

```
postgresql://postgres:your_password@db.ujxwaisatoycvroccghw.supabase.co:5432/postgres
```

### 6. Update `application.properties`

Replace the datasource.url in:
`src/main/resources/application.properties`

```properties
spring.datasource.url=jdbc:postgresql://db.ujxwaisatoycvroccghw.supabase.co:6543/postgres?sslmode=require
spring.datasource.username=postgres.ujxwaisatoycvroccghw
spring.datasource.password=dyson2006@
```

## 🔍 Common Supabase Connection Formats:

### Option 1: Connection Pooler (Port 6543)
```properties
spring.datasource.url=jdbc:postgresql://aws-0-ap-south-1.pooler.supabase.com:6543/postgres?sslmode=require
spring.datasource.username=postgres.ujxwaisatoycvroccghw
```

### Option 2: Direct Connection (Port 5432)
```properties
spring.datasource.url=jdbc:postgresql://db.ujxwaisatoycvroccghw.supabase.co:5432/postgres?sslmode=require
spring.datasource.username=postgres
```

## ⚠️ Important Notes:

1. **SSL Mode**: Always add `?sslmode=require` at the end of the URL
2. **Port**: Use 6543 for connection pooler, 5432 for direct connection
3. **Username**: May be just `postgres` or `postgres.projectref`
4. **Firewall**: Ensure your network allows outbound connections to Supabase

## 🧪 Test Connection:

You can test the connection using PowerShell:
```powershell
Test-NetConnection -ComputerName db.ujxwaisatoycvroccghw.supabase.co -Port 5432
```

## 📧 Where to Find These Details in Supabase:

1. Login to Supabase
2. Project Settings → Database
3. Copy the **Connection string** under "Connection info"
4. Look for:
   - Host
   - Database name  
   - Port
   - User
   - Password (you already have this)

## 🚀 Once Updated:

1. Stop the current Spring Boot app (Ctrl+C)
2. Run again: `mvn spring-boot:run`
3. The app should start successfully on http://localhost:8080

---

Need the exact connection details? Check your Supabase dashboard and update the configuration!
