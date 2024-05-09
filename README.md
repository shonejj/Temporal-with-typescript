# Temporal-Enabled Scraper Deployment Guide

## 🚀 Deployment

### 🛠️ Steps

1. **Install Dependencies**
```
npm install
```
3. **Start Temporal Server in Development Mode**
```
temporal server start-dev
```
3. **Run Application in Watch Mode**
```
npm run start.watch
```
4. **Execute Workflow**
```
npm run workflow
```

## 📊 Monitoring Workflow
### To monitor the workflow:

- Open Temporal UI
- Trigger the worker at localhost:3009
- Pass a URL parameter in a GET method
