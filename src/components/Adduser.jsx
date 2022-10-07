

const Adduser = () => {
  return (
    <>
        <h2>Add New User</h2>
        <div className="form">
            <form>
                <input type="text" name="name" placeholder="Name" />
                <input type="Email" name="email" placeholder="Email" />
                <input type="tel" name="phone" placeholder="Phone" />
                <select name="role" id="">
                    <option value="admin">Admin</option>
                    <option value="writer">Writer</option>
                    <option value="user">User</option>
                </select>
                <button type="submit">Add User</button>
            </form>
        </div>
    </>
  )
}

export default Adduser