import  { extname } from 'path'
import { HttpException, HttpStatus } from '@nestjs/common'

export const imageFileFilter =  (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        return callback(
            new HttpException(
                'Images file only',
                HttpStatus.BAD_REQUEST,
            ),
            false
        )
    }
    callback(null, true)
}

export const imageFileName = (req, file, callback) => {
    const name: string = file.originalname.split('.')[0]
    const extension: string =  extname(file.originalname)
    callback(null, `${name}${new Date().getTime()}${extension}`)
}