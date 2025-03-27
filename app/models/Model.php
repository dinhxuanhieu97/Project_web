<?php
class Model
{
    public static $connection = NULL;

    // Khởi tạo kết nối cơ sở dữ liệu
    public function __construct()
    {
        // Kiểm tra nếu kết nối chưa tồn tại
        if (!self::$connection) {
            // Tạo kết nối mới
            self::$connection = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

            // Kiểm tra nếu có lỗi kết nối
            if (self::$connection->connect_error) {
                die("Connection failed: " . self::$connection->connect_error);
            }

            // Thiết lập bộ mã ký tự
            self::$connection->set_charset('utf8mb4');
        }
    }

    // Phương thức SELECT: thực thi truy vấn SQL và trả về kết quả
    public function select($sql)
    {
        $items = [];

        // Thực thi câu lệnh SQL
        if (!$sql->execute()) {
            // Nếu có lỗi trong khi thực thi câu lệnh SQL, trả về false
            echo "Error executing query: " . $sql->error;
            return false;
        }

        // Lấy kết quả của truy vấn
        $result = $sql->get_result();
        
        // Kiểm tra nếu có kết quả
        if ($result) {
            // Chuyển kết quả thành mảng
            $items = $result->fetch_all(MYSQLI_ASSOC);
        }
        
        return $items;
    }

    // Phương thức đóng kết nối cơ sở dữ liệu
    public static function disconnect()
    {
        if (self::$connection) {
            self::$connection->close();
        }
    }
}



// class Model
// {
//     public static $connection = NULL;

//     public function __construct()
//     {
//         if(!self::$connection) {
//             self::$connection = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
//             self::$connection->set_charset('utf8mb4');
//         }
//         return self::$connection;
//     }

//     public function select($sql)
//     {
//         $items = [];
//         $sql->execute();
//         $items = $sql->get_result()->fetch_all(MYSQLI_ASSOC);
//         return $items;
//     }
// }