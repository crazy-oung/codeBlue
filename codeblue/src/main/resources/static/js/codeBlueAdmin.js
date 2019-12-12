console.log("관리자");
	$("#sideBar").append( '<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" style="height:100%"">'
			+ '  <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/admin"> '
			+ ' <div class="sidebar-brand-icon mx-1">'
			+ ' 	<img src="./img/codeBlueIconWhite.png" width="40px">'
			+ ' </div>'
			+ ' <div class="sidebar-brand-text mr-1">'
			+ ' 	<img src="./img/codeBlueWhite.png" width="100px">'
			+ ' </div>'
			+ ' </a>'
			+ '<!-- Divider -->'
	+ '<hr class="sidebar-divider my-0">'
	+ '      <!-- Nav Item - Dashboard -->'
	+ '      <li class="nav-item" id="sideBarDashBoard">'
	+ '        <a class="nav-link" href="/admin">'
	+ '          <i class="fas fa-fw fa-tachometer-alt"></i>'
	+ '          <span>관리자 홈</span></a>'
	+ '      </li>'
	+ '      <!-- Divider -->'
	+ '      <hr class="sidebar-divider">'
	+ '      <!-- Heading -->'
	+ '      <div class="sidebar-heading">'
	+ '   	게시글 및 유저'
	+ '    </div>'
	+ '      <!-- Nav Item - Pages Collapse Menu -->'
	+ '      <li class="nav-item" id="sideBarManage">'
	+ '        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">'
	+ '          <i class="fas fa-fw fa-cog"></i>'
	+ '          <span>글 관리</span>'
	+ '        </a>'
	+ '        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">'
	+ '          <div class="bg-white py-2 collapse-inner rounded">'
	+ '            <h6 class="collapse-header">질문 및 답변 관리</h6>'
	+ '            <a class="collapse-item" href="/adminQuestionBoard">질문 관리</a>'
	+ '            <a class="collapse-item" href="/adminWithdrawQuestionBoard">삭제 질문 </a>'
	+ '            <a class="collapse-item" href="/adminAnswer">답변 조회</a>'
	+ '            <a class="collapse-item" href="/adminQuestionComment">질문 댓글</a>'
	+ '            <a class="collapse-item" href="/adminAnswerComment">답변 댓글</a>'
	+ '            <a class="collapse-item" href="/adminVoteBoard">추천수 조회</a>'
	+ '          </div>'
	+ '        </div>'
	+ '      </li>'
	+ '      <li class="nav-item" id="sideBarUser"> '
	+ '        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">'
	+ '          <i class="fas fa-fw fa-wrench"></i>'
	+ '          <span>회원 관리</span>'
	+ '        </a>'
	+ '        <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">'
	+ '          <div class="bg-white py-2 collapse-inner rounded">'
	+ '            <h6 class="collapse-header">회원 조회 및 관리</h6>'
	+ '            <a class="collapse-item" href="/adminUserList">회원 조회</a>'
	+ '            <a class="collapse-item" href="/adminWithdrawUserList">탈퇴회원 조회</a>'
	+ '            <a class="collapse-item" href="/adminReportUserList">신고회원 조회</a>'
	+ '            <a class="collapse-item" href="/adminExpertUserList">전문가 조회</a>'
	+ '          </div>'
	+ '        </div>'
	+ '      </li>'
	+ '		      <!-- Divider -->'
	+ '      <hr class="sidebar-divider">'
	+ '      <!-- Heading -->'
	+ '      <div class="sidebar-heading">'
	+ '        	서비스 관리'
	+ '      </div>'
	+ '      <!-- Nav Item - Pages Collapse Menu -->'
	+ '      <li class="nav-item" id="sideBarHospital">'
	+ '        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">'
	+ '          <i class="fas fa-fw fa-folder"></i>'
	+ '          <span>제휴 관리</span>'
	+ '        </a>'
	+ '        <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">'
	+ '          <div class="bg-white py-2 collapse-inner rounded">'
	+ '            <h6 class="collapse-header">제휴 병원 관리</h6>'
	+ '            <a class="collapse-item" href="/adminHospitalList">제휴병원 조회</a>'
	+ '            <a class="collapse-item" href="/addHospital">제휴병원 추가</a>'
	+ '<!--        <div class="collapse-divider"></div> -->'
	+ '          </div>'
	+ '        </div>'
	+ '      </li>'
	+ '      <!-- Nav Item - Pages Collapse Menu -->'
	+ '      <li class="nav-item" id="sideBarNotice">'
	+ '        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseReports" aria-expanded="true" aria-controls="collapseReports">'
	+ '          <i class="fas fa-fw fa-folder"></i>'
	+ '          <span>공지 및 문의 내역</span>'
	+ '        </a>'
	+ '        <div id="collapseReports" class="collapse" aria-labelledby="headingReports" data-parent="#accordionSidebar">'
	+ '          <div class="bg-white py-2 collapse-inner rounded">'
	+ '            <h6 class="collapse-header">공지 및 문의</h6>'
	+ '            <a class="collapse-item" href="/adminInquiryBoard">문의 내역</a>'
	+ '            <a class="collapse-item" href="/adminReportBoard">신고 내역</a>'
	+ '	       	   <div class="collapse-divider"></div> '
	+ '            <a class="collapse-item" href="/adminFaqBoard">FAQ 관리</a>'
	+ '            <a class="collapse-item" href="/adminNoticeBoard">공지 관리</a>'
	+ '          </div>'
	+ '        </div>'
	+ '      </li>'
	+ '      <hr class="sidebar-divider">'
	+ '      <div class="sidebar-heading">'
	+ '        	기타'
	+ '      </div>'
	+ '      <!-- Nav Item - Charts -->'
	+ '      <li class="nav-item" id="sideBarChart">'
	+ '        <a class="nav-link" href="/analysis">'
	+ '          <i class="fas fa-fw fa-chart-area"></i>'
	+ '          <span>통계</span></a>'
	+ '      </li>'
	+ '      <!-- Nav Item - Tables -->'
	+ '      <li class="nav-item" id="sideBarSetting">'
	+ '        <a class="nav-link collapsed" href="/manageAdmin" data-toggle="collapse" data-target="#collapseManagers" aria-expanded="true" aria-controls="collapseManagers">'
	+ '          <i class="fas fa-fw fa-table"></i>'
	+ '          <span>관리자 설정</span>' 
	+ '        </a>'
	+ '        <div id="collapseManagers" class="collapse" aria-labelledby="headingManagers" data-parent="#accordionSidebar">'
	+ '          <div class="bg-white py-2 collapse-inner rounded">'
	+ '            <h6 class="collapse-header">관리자 관리</h6>'
	+ '            <a class="collapse-item" href="/adminManagerList">관리자 조회</a>'
	+ '            <a class="collapse-item" href="/adminReportBoard">관리자 추가</a>'
	+ '          </div>'
	+ '        </div>'
	+ '      </li>'
	+ '      <!-- Divider -->'
	+ '      <hr class="sidebar-divider d-none d-md-block">'
	+ '		      <!-- Sidebar Toggler (Sidebar) -->'
	+ '      <div class="text-center d-none d-md-inline">'
	+ '        <button class="rounded-circle border-0" id="sidebarToggle"></button>'
	+ '      </div>'
	+ '    </ul>');
	
	$("#topBar").append('<!-- Topbar -->'
        + '<nav class="navbar navbar-expand navbar-light topbar shadow" style="height: 60px;border-bottom: 1px solid #d9d9d9; border-top: 4px solid #4e73df;">'
        + '<!-- Sidebar Toggle (Topbar) -->'
        + '  <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">'
        + '    <i class="fa fa-bars"></i>'
        + '  </button>'
        + ' <!-- Topbar Search -->'
        + '  <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">'
        + '   <div class="input-group">'
        + '      <input type="text" class="form-control bg-light border-1 small" placeholder="항목 검색" aria-label="Search" aria-describedby="basic-addon2">'
        + '      <div class="input-group-append">'
        + '        <button class="btn btn-primary" type="button">'
        + '          <i class="fas fa-search fa-sm"></i>'
        + '        </button>'
        + '      </div>'
        + '    </div>'
        + '  </form>'
        + '  <!-- Topbar Navbar -->'
        + '  <ul class="navbar-nav ml-auto">'
        + '    <!-- Nav Item - Search Dropdown (Visible Only XS) -->'
        + '  <li class="nav-item dropdown no-arrow d-sm-none">'
        + '     <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'
        + '       <i class="fas fa-search fa-fw"></i>'
        + '     </a>'
        + '     <!-- Dropdown - Messages -->'
        + '     <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">'
        + '        <form class="form-inline mr-auto w-100 navbar-search">'
        + '       <div class="input-group">'
        + '         <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">'
        + '         <div class="input-group-append">'
        + '           <button class="btn btn-primary" type="button">'
        + '             <i class="fas fa-search fa-sm"></i>'
        + '           </button>'
        + '         </div>'
        + '       </div>'
        + '     </form>'
        + '   </div>'
        + ' </li>'
//        + '    <div class="topbar-divider d-none d-sm-block"></div>'
        + ' <!-- Nav Item - User Information -->'
        + ' <li class="nav-item dropdown no-arrow">'
        + '   <a class="nav-link dropdown-toggle mr-2" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'
        + '   	<!-- 로그인 관리자 이름 출력 -->'
        + '     <span class="mr-2 d-none d-lg-inline text-gray-600" id="managerName">관리자 이름</span>'
        + '     <img class="img-profile rounded-circle" src="/img/profile.svg"><!-- 디폴트 이미지 -->'
        + '   </a>'
        + '   <!-- Dropdown - User Information -->'
        + '   <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">'
        + '     <a class="dropdown-item" href="#">'
        + '       <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>'
        + '       설정'
        + '     </a>'
        + '     <a class="dropdown-item" href="#">'
        + '       <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>'
        + '       활동로그'
        + '     </a>'
        + '     <div class="dropdown-divider"></div>'
        + '     <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">'
        + '       <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>'
        + '       로그아웃'
        + '     </a>'
        + '   </div>'
        + ' </li>'
        + ' </ul>'
        + '</nav>'
        + '<!-- End of Topbar -->')
	
       $.ajax({
    	   url : "/rest/admin/getLoginManager",
    	   method:"get",
    	   success:function(json){
    		   console.log(json);
    		   $("#managerName").text(json.managerName);
    	   }
    	   
       }) 
        
	$("#sidebarToggle").click(function(){
//		console.log("사이드바 숨김");
		if($("#page-top").attr("class")=="sidebar-toggled"){
//			alert("숨김상태!")
			$("#page-top").removeClass("sidebar-toggled");
			$("#accordionSidebar").removeClass("toggled");
			return;
		}
		$("#page-top").addClass("sidebar-toggled");
		$("#accordionSidebar").addClass("toggled");
	})
	

