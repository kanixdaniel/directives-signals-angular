import { Component, computed, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
    templateUrl: './properties-page.component.html',
    styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent {
    user = signal<User>({
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg"
    });
    fullName = computed<string>(() => `${this.user()!.first_name} ${this.user()!.last_name}`)

    onFieldUpdated(field: keyof User, value: string): void {
        /* this.user.set({
            ...this.user(),
            [field]: value
        }); */

        /* this.user.update(current => ({
            ...current,
            [field]: value
        })); */

        this.user.update(current => {
            switch (field) {
                case 'email':
                    current.email = value;
                    break;
                case 'first_name':
                    current.first_name = value;
                    break;
                case 'last_name':
                    current.last_name = value;
                    break;
            }

            return current
        })
    }
}
