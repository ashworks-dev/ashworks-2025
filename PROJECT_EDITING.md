# Project Editing System

This system allows you to edit video project entries directly from the Angular showreels page using a Flask API backend.

## Quick Start

1. **Start the development environment:**
   ```bash
   ./start_dev.sh
   ```
   This will start both the Flask API server (port 5000) and Angular dev server (port 4200).

2. **Access the editing interface:**
   - Normal view: http://localhost:4200/showreels
   - Edit mode: http://localhost:4200/showreels?edit=true

## How It Works

### Edit Mode Features
- **Inline Editing**: Click the edit button on any project to modify its details
- **Real-time Preview**: See changes immediately as you edit
- **Media Management**: Add, edit, or remove images, videos, and website links
- **Publish Changes**: One-click publishing saves to JSON and regenerates TypeScript

### Data Flow
1. **Edit Mode**: Loads data from Flask API (`/api/projects`)
2. **Make Changes**: Edit project details, add media, etc.
3. **Publish**: Saves to `data/projects.json` and regenerates `src/app/services/project-data.ts`
4. **Page Reload**: Shows updated data from the generated TypeScript file

## API Endpoints

- `GET /api/projects` - Get all projects
- `POST /api/projects` - Save all projects
- `POST /api/export` - Export to TypeScript
- `POST /api/publish` - Save and export in one operation
- `GET /api/health` - Health check

## File Structure

```
├── api_server.py          # Flask API server
├── project_manager.py     # Project data management
├── data/
│   └── projects.json      # Project data (editable)
├── src/app/services/
│   ├── resume.service.ts  # Angular service
│   └── project-data.ts    # Generated TypeScript data
└── start_dev.sh          # Development startup script
```

## Manual Usage

### Start Flask API only:
```bash
python3 api_server.py
```

### Use Python project manager:
```bash
python3 project_manager.py  # Interactive mode
python3 project_manager.py export  # Export to TypeScript
```

### Start Angular only:
```bash
ng serve
```

## Editing Workflow

1. Navigate to `/showreels?edit=true`
2. Click the edit button (pencil icon) on any project
3. Modify project details:
   - Project name, year, type
   - Description
   - Poster image URL
   - Add/remove media content
4. Click save (checkmark) or cancel (X)
5. Click "Publish Changes" when ready
6. The page will reload with updated content

## Media Types

- **Images**: Display as thumbnails with captions
- **Videos**: Embedded video players with controls
- **Websites**: External links with icons

## Troubleshooting

- **API not responding**: Check if Flask server is running on port 5000
- **Changes not saving**: Ensure you click "Publish Changes" after editing
- **TypeScript errors**: Run `python3 project_manager.py export` to regenerate data
- **CORS issues**: The Flask server includes CORS headers for local development

## Security Note

This system is designed for local development only. No authentication is implemented. Do not deploy to production without adding proper security measures. 