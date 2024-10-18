import { Component } from '@angular/core';
import {LinkComponent} from '../../atoms/link/link.component';
import {IconComponent} from '../../atoms/icon/icon.component';
import {ImgComponent} from '../../atoms/img/img.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-social-link',
  standalone: true,
  imports: [
    LinkComponent,
    IconComponent,
    ImgComponent,
    NgForOf
  ],
  templateUrl: './social-link.component.html',
  styleUrl: './social-link.component.css'
})
export class SocialLinkComponent {
  height = '15px';
  width = '15px';
  socialLinks = [
    {
      url: 'https://www.facebook.com',
      alt: 'facebook',
      img: 'icons/facebook_white.svg'
    },
    {
      url: 'https://www.twitter.com',
      alt: 'twitter',
      img: 'icons/twitter_white.svg'
    },
    {
      url: 'https://www.instagram.com',
      alt: 'instagram',
      img: 'icons/instagram_white.svg'
    },
    {
      url: 'https://www.discord.com',
      alt: 'discord',
      img: 'icons/discord_white.svg'
    }

  ]
}
