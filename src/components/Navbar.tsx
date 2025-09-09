import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, GraduationCap, User, LogOut } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  const publicNavItems = [
    { name: 'Home', href: '/' },
    { name: 'Chatbot', href: '/chatbot' },
  ];

  const authNavItems = [
    { name: 'Login', href: '/login' },
    { name: 'Register', href: '/register' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 glass bg-background/95 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-gradient-hero rounded-xl shadow-medium">
                <GraduationCap className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                EduBot
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Public nav items */}
            {publicNavItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-primary bg-primary/10 shadow-soft'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {item.name}
              </NavLink>
            ))}
            
            {/* Admin nav item for admins only */}
            {isAuthenticated && user?.role === 'admin' && (
              <NavLink
                to="/admin"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive('/admin')
                    ? 'text-primary bg-primary/10 shadow-soft'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                Admin
              </NavLink>
            )}

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                      <Avatar className="h-10 w-10 ring-2 ring-primary/20">
                        <AvatarImage src="" alt={user?.name} />
                        <AvatarFallback className="bg-gradient-hero text-white font-semibold">
                          {user?.name?.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <div className="flex items-center justify-start gap-2 p-2">
                      <div className="flex flex-col space-y-1 leading-none">
                        <p className="font-medium">{user?.name}</p>
                        <p className="text-xs text-muted-foreground">{user?.email}</p>
                        <p className="text-xs text-primary capitalize">{user?.role}</p>
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="flex items-center space-x-3">
                  {authNavItems.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        item.name === 'Login'
                          ? 'text-foreground hover:bg-secondary'
                          : 'bg-gradient-hero text-white hover:shadow-medium'
                      }`}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            {isAuthenticated && (
              <Avatar className="h-8 w-8 ring-2 ring-primary/20">
                <AvatarImage src="" alt={user?.name} />
                <AvatarFallback className="bg-gradient-hero text-white text-sm font-semibold">
                  {user?.name?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 hover:bg-secondary"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pt-4 pb-6 space-y-2 bg-background/95 backdrop-blur-xl border-t border-border/50">
              {/* Public nav items */}
              {publicNavItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-primary bg-primary/10 shadow-soft'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              
              {/* Admin nav item for admins only */}
              {isAuthenticated && user?.role === 'admin' && (
                <NavLink
                  to="/admin"
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive('/admin')
                      ? 'text-primary bg-primary/10 shadow-soft'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Admin
                </NavLink>
              )}

              {/* Auth section */}
              {isAuthenticated ? (
                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center space-x-3 px-4 py-3 mb-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="" alt={user?.name} />
                      <AvatarFallback className="bg-gradient-hero text-white font-semibold">
                        {user?.name?.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{user?.name}</p>
                      <p className="text-sm text-muted-foreground">{user?.email}</p>
                      <p className="text-xs text-primary capitalize">{user?.role}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    onClick={handleLogout}
                    className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </Button>
                </div>
              ) : (
                <div className="pt-4 border-t border-border/50 space-y-2">
                  {authNavItems.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                        item.name === 'Login'
                          ? 'text-foreground hover:bg-secondary'
                          : 'bg-gradient-hero text-white hover:shadow-medium text-center'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};