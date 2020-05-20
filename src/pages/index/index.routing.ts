import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
//   { path: 'notice',data:{preload:false}, loadChildren: () => import('src/pages/tab-index/notice/notice.module').then(m => m.NoticePageModule) },
//   { path: 'scan',data:{preload:false}, loadChildren: () => import('src/pages/common/scan/scan.module').then(m => m.ScanPageModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule {}
