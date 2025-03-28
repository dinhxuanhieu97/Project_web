<?php
class UserModel extends Model {
    // Đăng nhập người dùng
    public function login($login_email, $password)
    {
        // Chuẩn bị câu lệnh SQL
        $sql = parent::$connection->prepare('SELECT * FROM users WHERE email = ?');
        $sql->bind_param('s', $login_email);
        
        // Thực hiện truy vấn và lấy kết quả
        $result = parent::select($sql);
        
        // Kiểm tra nếu không có kết quả
        if (empty($result)) {
            return false;  // Nếu không có người dùng, trả về false
        }

        $user = $result[0];

        // Kiểm tra mật khẩu
        if (password_verify($password, $user['password'])) {
            return $user;
        }
        return false;
    }

    // Đăng ký người dùng
    public function register($login_email, $password)
    {
        // Mã hóa mật khẩu
        $password = password_hash($password, PASSWORD_DEFAULT);
        
        // Chuẩn bị câu lệnh SQL
        $sql = parent::$connection->prepare('INSERT INTO `users`(`email`, `password`) VALUES (?, ?)');
        $sql->bind_param('ss', $login_email, $password);
        
        // Thực thi câu lệnh SQL
        return $sql->execute();
    }

    // Lấy ID người dùng theo login_email
    public function getIdByUsername($login_email)
    {
        // Chuẩn bị câu lệnh SQL
        $sql = parent::$connection->prepare('SELECT id FROM users WHERE email=?');
        $sql->bind_param('s', $login_email);
        
        // Lấy kết quả và trả về ID
        $result = parent::select($sql);
        return !empty($result) ? $result[0]['id'] : null;  // Trả về null nếu không tìm thấy người dùng
    }
}