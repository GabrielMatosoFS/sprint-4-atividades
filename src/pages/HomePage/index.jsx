export const HomePage = ({user}) => {
    return(
        <main>
            Home page
            {user ? (
                <>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </>
            ) : null}
        </main>
    )
}