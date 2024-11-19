
const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "firstName": "Amit",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Project Planning",
                "taskDescription": "Create a project plan for the new client.",
                "taskDate": "2024-11-10",
                "category": "Planning"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Team Meeting",
                "taskDescription": "Attend weekly team meeting.",
                "taskDate": "2024-11-05",
                "category": "Meeting"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Code Review",
                "taskDescription": "Review pull requests on GitHub.",
                "taskDate": "2024-11-08",
                "category": "Development"
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "firstName": "Neha",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Design Mockups",
                "taskDescription": "Design new mockups for the client presentation.",
                "taskDate": "2024-11-09",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Update Documentation",
                "taskDescription": "Add comments to code and update documentation.",
                "taskDate": "2024-11-04",
                "category": "Documentation"
            }
        ],
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "firstName": "Rohit",
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Backend Setup",
                "taskDescription": "Set up database for the new project.",
                "taskDate": "2024-11-03",
                "category": "Backend"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Security Analysis",
                "taskDescription": "Conduct a security analysis for the client's site.",
                "taskDate": "2024-11-11",
                "category": "Security"
            }
        ],
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "firstName": "Priya",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Client Follow-up",
                "taskDescription": "Follow up with the client on project updates.",
                "taskDate": "2024-11-07",
                "category": "Communication"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Bug Fixing",
                "taskDescription": "Fix reported issues in the app.",
                "taskDate": "2024-11-06",
                "category": "Maintenance"
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 1
        }
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "firstName": "Anjali",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Research",
                "taskDescription": "Conduct research on market trends.",
                "taskDate": "2024-11-08",
                "category": "Research"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Product Testing",
                "taskDescription": "Test new features on the staging environment.",
                "taskDate": "2024-11-09",
                "category": "Testing"
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        }
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return { employees, admin }
}
