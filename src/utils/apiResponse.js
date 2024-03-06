class ApiResponse{
    constructor(statusCode,data,message="success")
    {
       this.statusCode=statusCode;
       this.data=data;//json
       this.message=message;
       this.success=statusCode < 400;
    }
}
export {ApiResponse}