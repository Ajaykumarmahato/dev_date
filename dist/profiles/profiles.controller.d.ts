import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class ProfilesController {
    findAll(age: number, location: string): {
        age: number;
        location: string;
    }[];
    findONe(id: string): {
        id: string;
    };
    createProfile(createProfileDto: CreateProfileDto): {
        name: string;
        description: string;
    };
    updateProfile(id: string, updateProfileDto: UpdateProfileDto): {
        id: string;
        name: string;
        description: string;
    };
    deleteProfile(id: string): void;
}
