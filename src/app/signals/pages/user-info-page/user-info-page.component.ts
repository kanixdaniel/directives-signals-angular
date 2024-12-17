import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.css']
})
export class UserInfoPageComponent implements OnInit {
    private usersService = inject(UsersService);
    userId = signal(1);
    currectUser = signal<User | undefined>(undefined);
    userWasFount = signal(true);
    fullName = computed<string>(() => {
        if(!this.currectUser) return 'Usuario no encontrado';

        return `${this.currectUser()!.first_name} ${this.currectUser()!.last_name}`;
    })

    ngOnInit(): void {
        this.loadUser(this.userId());
    }

    loadUser(id: number): void {
        if(id <= 0) return;

        this.userId.set(id);
        this.currectUser.set(undefined);

        this.usersService.getUserById(id)
            .subscribe({
                next: (user) => {
                    this.currectUser.set(user);
                    this.userWasFount.set(true);
                },
                error: () => {
                    this.userWasFount.set(false);
                    this.currectUser.set(undefined);
                }
            })
    }
}
