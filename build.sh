# build front end
cd frontend
npm run publish
cd ..

# build web api
cd backend
dotnet build
cd ..
