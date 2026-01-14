import { Controller, Get, Query, Param, Post, Body, Put, Delete, HttpCode, HttpStatus} from '@nestjs/common';
import {CreateProfileDto} from './dto/create-profile.dto';
import {UpdateProfileDto} from './dto/update-profile.dto';
@Controller('profiles') //decorators
export class ProfilesController {
    
    @Get()
    findAll(
        @Query('age') age: number,
        @Query('location') location: string
    ) { // Query used to get query parameters from the URL
        return [{
            age,
            location
        }];
    }

    @Get(':id')
    findONe(@Param('id') id: string){
        return {
            id
        }
    }

    @Post()
    createProfile(@Body()createProfileDto: CreateProfileDto){
        return {
            name: createProfileDto.name,
            description: createProfileDto.description,
        };
    }

    @Put(':id')
    updateProfile(
        @Param('id') id: string,
        @Body() updateProfileDto: UpdateProfileDto
    ){
        return {
            id: id,
            name: updateProfileDto.name,
            description: updateProfileDto.description,
        };
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT) // to set custom HTTP status code instead of default 200
    deleteProfile(@Param('id') id: string){
        return;
    }   



}
