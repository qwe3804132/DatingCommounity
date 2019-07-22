import { AuthGuard } from './_guards/auth.guard';
import { Routes } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberListComponent } from './member-list/member-list.component';
import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';


export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'members', component: MemberListComponent, canActivate: [AuthGuard]},
    {path: 'messages', component: MessagesComponent},
    {path: 'lists', component: ListsComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'},

];
