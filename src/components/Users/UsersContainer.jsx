import { useState, useEffect, Fragment } from 'react'
import { ProgressSpinner } from 'primereact/progressspinner';
import UsersView from './UsersView';

const UsersContainer = () => {
    const [dataUsers, setDataUsers] = useState([]),
        [loadingUsers, setLoadingUsers] = useState(true);

    const getDataUsers = async () => {
        try {
            const response = await fetch("http://localhost:5000/users",
                {
                    headers: {
                        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTczMTY0MDI1MCwianRpIjoiNzQ1NjczYWUtN2M5Zi00M2U1LThiOGItNmJkMTVhYWY3OWU5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImFkbWluIiwibmJmIjoxNzMxNjQwMjUwLCJjc3JmIjoiZTEzMjQ1MmItYjM5ZC00ZTQyLWFhNTQtOWM2ZDRkNjUzZmU3IiwiZXhwIjoxNzMxNjQxNDUwLCJhZG1pbmlzdHJhZG9yIjp0cnVlfQ.vT200asWjHSlsxjkmR9EdlY0RZ0FDAzHEGs-ijom3ho`
                    }
                }
            )
            console.log("response", response)
            if (!response.ok) {
                console.log("Hubo un error en la peticion")
            }

            const results = await response.json()
            setDataUsers(results)
        } catch (error) {
            console.log("Hubo un error en la api ", error)
        } finally {
            setLoadingUsers(false)
        }
    }

    console.log("dataUsers", dataUsers)

    useEffect(() => {
        getDataUsers()
    }, [])

    return (
        <UsersView loadingUsers={loadingUsers} dataUsers={dataUsers} />
    )

}

export default UsersContainer